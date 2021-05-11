import React from 'react';

/**
 *
 */
type Flex = {
  alignItems?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'row' | 'column';
};

export const Flex: React.FC<Flex> = ({
  children,
  flexDirection = 'column',
  alignItems = 'center',
  justifyContent = 'center',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection,
        justifyContent,
        alignItems,
      }}
    >
      {children}
    </div>
  );
};

/**
 *
 */
type SpacingBox = {
  width?: string;
};

export const SpacingBox: React.FC<SpacingBox> = ({children, width}) => {
  return (
    <div
      style={{
        display: 'inline-block',
        width,
      }}
    >
      {children}
    </div>
  );
};

/**
 *
 */
type Box = {
  flex?: string;
  padding?: string;
  margin?: string;
  height?: string;
  width?: string;
  fullWidth?: boolean;
};

export const Box: React.FC<Box> = ({children, flex, fullWidth, padding, margin, height, width}) => {
  return (
    <div
      style={{
        flex,
        padding,
        margin,
        height,
        width: fullWidth ? '100%' : width,
      }}
    >
      {children}
    </div>
  );
};

/**
 *
 */
export const FlexBox: React.FC<Box & Flex> = ({
  children,
  padding,
  margin,
  height,
  width,
  fullWidth = false,
  alignItems = 'center',
  justifyContent = 'center',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems,
        justifyContent,
        padding,
        margin,
        height,
        width: fullWidth ? '100%' : width,
      }}
    >
      {children}
    </div>
  );
};

/**
 *
 */
export const Center: React.FC = ({children}) => {
  return (
    <FlexBox width="100%" height="100%">
      {children}
    </FlexBox>
  );
};

/**
 *
 */
type Modal = {
  rounded?: boolean;
  open: boolean;
  onClose: () => void;
};

export const Modal: React.FC<Modal> = ({children, open, onClose, rounded = false}) => {
  if (!open) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      style={{
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: 'rgb(255, 255, 255)',
          borderRadius: rounded ? '32px' : '0px',
          padding: '16px 32px',
        }}
      >
        {children}
      </div>
    </div>
  );
};
