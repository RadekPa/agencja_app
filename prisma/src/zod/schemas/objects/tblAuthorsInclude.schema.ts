import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsFindManySchema as tblTitAuthorsFindManySchema } from '../findManytblTitAuthors.schema';
import { TblAuthorsCountOutputTypeArgsObjectSchema as TblAuthorsCountOutputTypeArgsObjectSchema } from './TblAuthorsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblTitAuthors: z.union([z.boolean(), z.lazy(() => tblTitAuthorsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblAuthorsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblAuthorsIncludeObjectSchema: z.ZodType<Prisma.tblAuthorsInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsInclude>;
export const tblAuthorsIncludeObjectZodSchema = makeSchema();
