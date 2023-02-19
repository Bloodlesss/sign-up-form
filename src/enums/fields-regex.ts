export class FieldsRegex {
  static readonly Names: RegExp = /^[A-Za-z][A-Za-z ]{2,17}$/;
  static readonly email: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/;
  static readonly password: RegExp =
    /(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/;
}
