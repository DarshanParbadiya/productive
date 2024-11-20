import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['te', 'en'] as const;

export const {Link, useRouter, usePathname, redirect,} = createSharedPathnamesNavigation({locales});
 