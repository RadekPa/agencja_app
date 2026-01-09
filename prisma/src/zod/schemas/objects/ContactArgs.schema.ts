import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactSelectObjectSchema as ContactSelectObjectSchema } from './ContactSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ContactSelectObjectSchema).optional()
}).strict();
export const ContactArgsObjectSchema = makeSchema();
export const ContactArgsObjectZodSchema = makeSchema();
