export const errorHandler = (
  error,
  dispatch,
  rejectWithValue,
  errorMessage,
  showHttpError
) => {
  if (!error.response) {
    return rejectWithValue({
      message: 'ارتباط با سرور دچار مشکل مواجه شده است.',
    });
  }

  if (error?.response?.data?.message) {
    return rejectWithValue({
      message: error?.response?.data?.message,
    });
  }

  switch (error.response.status) {
    case 401:
      dispatch({ type: 'account/logout' });
      return rejectWithValue({
        message: 'نام کاربری یا رمز عبور اشتباه است.',
      });
    case 403:
      if (error?.response?.data?.detail) {
        return rejectWithValue({
          message: error?.response?.data?.detail,
        });
      }
    case 404:
      return rejectWithValue({
        message: 'موردی یافت نشد!',
      });
    case 500:
      return rejectWithValue({
        message: 'ایراد سروری پیش آمده! لطفاً ما را در جریان بگذارید.',
      });
  }

  if (errorMessage) {
    return rejectWithValue({ message: errorMessage });
  }

  if (showHttpError && error.response.data?.error) {
    return rejectWithValue({ message: error.response.data.error });
  }

  return rejectWithValue();
};
