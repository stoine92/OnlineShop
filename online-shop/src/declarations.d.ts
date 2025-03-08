declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  declare module '*.scss' {
    const content: string;
    export default content;
  }
  
  declare module '@mui/icons-material/*' {
    import { SvgIconComponent } from '@mui/icons-material';
    const value: SvgIconComponent;
    export default value;
  }
  