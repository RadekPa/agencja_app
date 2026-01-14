import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TblAuthorsCountOutputTypeSelectObjectSchema as TblAuthorsCountOutputTypeSelectObjectSchema } from './TblAuthorsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TblAuthorsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TblAuthorsCountOutputTypeArgsObjectSchema = makeSchema();
export const TblAuthorsCountOutputTypeArgsObjectZodSchema = makeSchema();
