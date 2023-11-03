export enum TypoVariants {
  TextExtraSmall = 'textExtraSmall',
  TextSmall = 'textSmall',
  TextMedium = 'textMedium',
  TextLarge = 'textLarge',
  TexExtraLarge = 'textExtraLarge',
  HeadingSmall = 'headingSmall',
  HeadingMedium = 'headingMedium',
  HeadingLarge = 'headingLarge',
  HeadingExtraLarge = 'headingExtraLarge',
}

export enum TypoColors {
  Primary = 'textPrimary',
  Secondary = 'textSecondary',
  Tertiary = 'textTertiary',
}

export enum ButtonVariants {
  Text = 'text',
  Container = 'container',
  Outlined = 'outlined',
}

export enum CommonVariants {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum TextFieldVariants {
  Outlined = 'outlined',
  Filled = 'filled',
}

export enum TextFieldTypes {
  Text = 'text',
  Password = 'password',
}

export enum MenuVariants {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export interface IMenuItem {
  title: string
  href: string
}

export type ApiErrorResponse = {
  code: string
  message: string
}

export enum Status {
  Failed,
  Success,
}
