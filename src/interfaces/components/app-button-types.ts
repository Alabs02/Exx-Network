export interface IAppButtonProps {
  title: string;
  iconUrl?: string;
  hasIcon: boolean;
  color?: string;
  imgAlt?: string;
  classes?: string[];
  command?: () => void;
}
