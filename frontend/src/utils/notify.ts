/**  ElNofication 二次封装 */
import { ElNotification, type NotificationOptions } from 'element-plus';

type NotifyType = 'success' | 'error' | 'info' | 'warning';

interface NotifyOptions extends Partial<Omit<NotificationOptions, 'type'>> {
  type?: NotifyType;
}

const notify = (options?: NotifyOptions) => {
  return ElNotification({
    ...options,
    duration: options?.duration ?? 3500,
    showClose: options?.showClose ?? false,
    offset: options?.offset ?? 10,
  });
};

// 新增方法
// 成功
notify.success = (message: string, options?: Omit<NotifyOptions, 'message'>) => {
  return notify({
    ...options,
    type: 'success',
    message,
  });
};
// 错误
notify.error = (message: string, options?: Omit<NotifyOptions, 'message'>) => {
  return notify({
    ...options,
    type: 'error',
    message,
  });
};
// 信息
notify.info = (message: string, options?: Omit<NotifyOptions, 'message'>) => {
  return notify({
    ...options,
    type: 'info',
    message,
  });
};
// 警告
notify.warning = (message: string, options?: Omit<NotifyOptions, 'message'>) => {
  return notify({
    ...options,
    type: 'warning',
    message,
  });
};

export default notify;
