// 設定をローカルストレージに保存する関数
const saveSettingsLocally = (key: string, value: number) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// 設定をローカルストレーから取得する関数
const getSettingsLocally = (key: string) => {
  const value = JSON.parse(localStorage.getItem(key) || "null");

  return value;
};

export { saveSettingsLocally, getSettingsLocally };
