'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';

import Image from 'next/image';
// import { updateUser } from '@/lib/actions/user.action';

import { useRouter, usePathname } from 'next/navigation';
import { ThreadValidation } from '@/lib/validations/thread';

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

function PostThread({ userId }: { userId: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: '',
      accountId: userId,
    },
  });

  return <div>PostThread</div>;
}
export default PostThread;
