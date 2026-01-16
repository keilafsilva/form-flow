import { Link } from 'react-router-dom';
import * as C from './styles';
import ProfileIcon from '../../svgs/profile.svg?react';
import BookIcon from '../../svgs/book.svg?react';
import MailIcon from '../../svgs/mail.svg?react';
import CheckIcon from '../../svgs/check.svg?react';

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SidebarItem = ({ title, description, icon, path, active }: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>

        <C.IconArea active={active}>
          {icon === 'profile' && <ProfileIcon fill="white" className='icon' />}
          {icon === 'book' && <BookIcon fill="white" className='icon' />}
          {icon === 'mail' && <MailIcon fill="white" className='icon' />}
          {icon === 'check' && <CheckIcon fill="white" className='iconCheck' />}
        </C.IconArea>

        <C.Point active={active} />
      </Link>
    </C.Container>
  );
};