import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactSelectObjectSchema as ContactSelectObjectSchema } from './ContactSelect.schema';
import { ContactIncludeObjectSchema as ContactIncludeObjectSchema } from './ContactInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ContactSelectObjectSchema).optional(),
  include: z.lazy(() => ContactIncludeObjectSchema).optional()
}).strict();
export const ContactArgsObjectSchema = makeSchema();
export const ContactArgsObjectZodSchema = makeSchema();
