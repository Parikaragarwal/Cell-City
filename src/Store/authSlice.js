import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../Appwrite/auth';

// Login Thunk
export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await authService.login({ email, password });
      return user;
    } catch (err) {
      return rejectWithValue(
        err.code === 401
          ? "Invalid email or password."
          : err.code >= 500
          ? "Server error. Please try again later."
          : "Something went wrong."
      );
    }
  }
);

// Logout Thunk
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authService.logout();
      return true;
    } catch (err) {
      console.log(err)
      return rejectWithValue("Logout failed.");
    }
  }
);

// Session Fetch Thunk
export const fetchSessionThunk = createAsyncThunk(
  'auth/fetchSession',
  async (_, { rejectWithValue }) => {
    try {
      const session = await authService.getCurrentUser();
      return session;   // null means not logged in
    } catch {
      return rejectWithValue("Session check failed.");
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    loading: true,
    isAdmin: false
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAdmin = false;
    }
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAdmin = true;
        localStorage.setItem("isAdmin", "true");
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed.";
      })

      // LOGOUT
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
        state.isAdmin = false;
        localStorage.removeItem("isAdmin");
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.error = action.payload || "Logout failed.";
      })

      // SESSION FETCH
      .addCase(fetchSessionThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSessionThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.user = action.payload;
          state.isAdmin = true;
        } else {
          state.user = null;
          state.isAdmin = false;
        }
      })
      .addCase(fetchSessionThunk.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.isAdmin = false;
      });
  }
});

export const { clearError, clearUser } = authSlice.actions;
export default authSlice.reducer;
