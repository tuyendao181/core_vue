enum SysMsg {
  // Error message
  E001 = '必須項目。',
  E002 = 'メールアドレスの正しい形式で入力してください。',
  E003 = '電話番号の正しい形式で入力してください。',
  E004 = '郵便番号の正しい形式で入力してください。',
  E005 = 'カタカナのみ入力できます。',
  E006 = 'この値は{0}より大きくなければなりません。',
  E007 = 'この値は{0}未満である必要があります。',
  E008 = 'IDとパスワードを確認してください。',
  E009 = '処理に失敗しました。',
  E010 = '最大{0}文字のみ入力できます。',
  E011 = '入力しているデータは既に登録されています。',
  E012 = '該当データが存在しません。',
  E013 = '商品分類に該当する仕入先を選択してください。',
  E014 = '開始日付以降の日付を入力してください。',

  // Confirm message
  C001 = '保存してもよろしいですか？',
  C002 = '削除してもよろしいですか？',

  // Success message
  S001 = '保存が完了しました。',
  S002 = '削除が完了しました。',

  // API error
  E400 = 'エラーが発生しました。もう一度お試しください。',
  E401 = 'ログインセッションの有効期限が切れています。もう一度ログインしてください。',
  E403 = 'この機能にアクセスする権限がありません。',
  E404 = 'エラーが発生しました。もう一度お試しください。',
  E422 = 'エラーが発生しました。もう一度お試しください。',
  E423 = 'エラーが発生しました。もう一度お試しください。',
  E500 = 'エラーが発生しました。もう一度お試しください。',
  E999 = 'エラーが発生しました。もう一度お試しください。'
}

export default SysMsg

export enum MsgTitle {
  E999 = 'エラー'
}

export enum MsgType {
  CONFIRM,
  WARNING,
  SUCCESS,
  ERROR
}
