import React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { ButtonIconPosition, ButtonSize, ButtonType } from './types';
import { IconName, IconSize } from '../Icon/types';
import './styles/index.scss';

interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  label?: string;
  iconName?: IconName;
  iconPosition?: ButtonIconPosition;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export const Button = ({
  type,
  size,
  label,
  iconName,
  iconPosition,
  disabled = false,
  loading = false,
  onClick,
  ...props
}: ButtonProps) => {
  const hasLeftIcon = iconName && iconPosition === ButtonIconPosition.Left;
  const hasRightIcon = iconName && iconPosition === ButtonIconPosition.Right;
  const hasOnlyIcon = iconName && iconPosition === ButtonIconPosition.Only;
  const hasIcon = hasLeftIcon || hasRightIcon || hasOnlyIcon;
  const hasOnlyLabel = !hasIcon;

  const getTypeClass = () => {
    switch (type) {
      case ButtonType.Secondary:
        return 'intelas-button--type--secondary';
      case ButtonType.Flat:
        return 'intelas-button--type--flat';
      case ButtonType.Destructive:
        return 'intelas-button--type--destructive';
      case ButtonType.Primary:
      default:
        return 'intelas-button--type--primary';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case ButtonSize.Large:
        return 'intelas-button--size--large';
      case ButtonSize.Small:
      default:
        return 'intelas-button--size--small';
    }
  };

  const getClassNames = () =>
    classNames({
      'intelas-button': true,
      'intelas-button--disabled': disabled,
      'intelas-button--loading': loading,
      'intelas-button--icon-position--left': hasLeftIcon,
      'intelas-button--icon-position--right': hasRightIcon,
      'intelas-button--icon-only': hasOnlyIcon,
      'intelas-button--label-only': hasOnlyLabel,
      [getTypeClass()]: true,
      [getSizeClass()]: true,
    });

  const getIconSize = () =>
    size === ButtonSize.Large ? IconSize.Large : IconSize.Small;

  const getIconName = () =>
    loading ? IconName.Loader : iconName || IconName.Loader;

  const getContent = () => (
    <>
      {(hasIcon || loading) && (
        <Icon size={getIconSize()} name={getIconName()} />
      )}
      {!hasOnlyIcon && <span className="intelas-button__label">{label}</span>}
    </>
  );

  const clickHandler = () => {
    if (disabled || loading) {
      return;
    }

    onClick && onClick();
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={getClassNames()}
      onClick={clickHandler}
      {...props}
    >
      {getContent()}
    </button>
  );
};
