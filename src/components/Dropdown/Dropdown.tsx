import React, {
    memo,
    useLayoutEffect,
    useRef,
    useState,
    FC,
} from 'react';
import cls from './Dropdown.module.css';
import { MoreIcon } from '../MoreIcon/Icon';

export type Option = {
    name: string;
    value: string;
};
interface IDropdown {
    options: Option[];
    onChangeSelect: (option: string) => void;
    widthButton?: number;
    heightButton?: number;
    colorButton?: string;
}

const Dropdown = (props: IDropdown) => {
    const {
        options,
        onChangeSelect,
        widthButton = 50,
        heightButton = 50,
        colorButton = `hsla(225, 14%, 100%, 0.8)`,
    } = props;
    const [openDropDown, setOpenDropDown] =
        useState<boolean>(false);

    const onOpen = () => {
        setOpenDropDown(true);
    };

    const onChangeSelectHandler = (value: string) => {
        onChangeSelect(value);
    };

    const renderOptions = () => {
        return options.map((option: Option) => {
            return (
                <li
                    className={cls.dropdownListEl}
                    key={option.name.replace(' ', '-')}
                    onClick={() => {
                        onChangeSelectHandler(option.value);
                    }}
                >
                    {option.name}
                </li>
            );
        });
    };

    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: Event) => {
        const target = event.target as HTMLDivElement;
        if (ref.current && !ref.current.contains(target)) {
            setOpenDropDown(false);
        }
    };
    useLayoutEffect(() => {
        document.addEventListener(
            'click',
            handleClickOutside,
            true,
        );
        return () => {
            document.removeEventListener(
                'click',
                handleClickOutside,
                true,
            );
        };
    }, []);
    return (
        <>
            <div
                className={cls.IconWrapper}
                ref={ref}
                onClick={onOpen}
            >
                <MoreIcon
                    color={colorButton}
                    width={widthButton}
                    height={heightButton}
                />
            </div>
            <div
                className={`${
                    openDropDown
                        ? `${cls.dropdownList} ${cls.open}`
                        : cls.dropdownList
                }`}
            >
                {renderOptions()}
            </div>
        </>
    );
};

export default Dropdown;
