import { tw } from 'twind';
import { Dispatch, SetStateAction } from 'react';
import { LinkButton, SECTION_HEIGHT, chip, title } from '.';
import { Project } from '../types';
import { Icon } from '../assets/icons';

export default function ProjectInfoContainer({
  selectedProject,
  isMoveRight,
  setIsMoveRight,
}: {
  selectedProject?: Project;
  isMoveRight: boolean;
  setIsMoveRight: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={tw`border-b-1 absolute top-0 ${
        !isMoveRight ? `translate-x-[100%]` : `translate-x-0`
      } w-full transition ease-in-out duration-700 flex flex-col`}
    >
      <div className={tw`bg-white h-full p-10 flex flex-col gap-5`}>
        <div className={tw`flex justify-between items-center`}>
          <div className={tw(title)}>{selectedProject?.name}</div>
          <Icon name='close' onClick={() => setIsMoveRight(false)} size={80} />
        </div>

        <div className={tw`border-l-2 pl-5 text-20 font-medium`}>{selectedProject?.info}</div>

        <div className={tw`flex gap-2`}>
          {selectedProject?.stack.map((el, index) => (
            <div key={el} className={tw`${index === 0 && `text-white bg-primary rounded-10 px-2`}`}>
              #{el}
            </div>
          ))}
        </div>

        <div className={tw(`flex gap-2`)}>
          {selectedProject?.site && (
            <LinkButton path={selectedProject?.site}>
              Site
              <Icon name='share_forward' size={20} color='white' />
            </LinkButton>
          )}
          {selectedProject?.notion && (
            <LinkButton path={selectedProject?.notion}>
              Notion
              <Icon name='share_forward' size={20} color='white' />
            </LinkButton>
          )}
          {selectedProject?.git && (
            <LinkButton path={selectedProject?.git}>
              Git
              <Icon name='share_forward' size={20} color='white' />
            </LinkButton>
          )}
          {selectedProject?.retrospection && (
            <LinkButton path={selectedProject?.retrospection}>
              Retrospection
              <Icon name='share_forward' size={20} color='white' />
            </LinkButton>
          )}
        </div>

        <div className={tw`flex justify-start gap-10 mt-5`}>
          <img
            className={tw`w-1/2 h-[${SECTION_HEIGHT / 1.8}px] border-1 border-[#e5e5e5] rounded-10`}
            src={selectedProject?.gif}
          />

          <div className={tw`flex flex-col gap-2 w-full`}>
            {selectedProject?.result.map((el, index) => (
              <li className={tw`flex items-center gap-3`} key={index}>
                <div className={tw(chip)} />
                {el}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
