import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCountOutputTypeSelectObjectSchema as ContactCountOutputTypeSelectObjectSchema } from './ContactCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ContactCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ContactCountOutputTypeArgsObjectSchema = makeSchema();
export const ContactCountOutputTypeArgsObjectZodSchema = makeSchema();
