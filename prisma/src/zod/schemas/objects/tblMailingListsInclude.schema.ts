import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassArgsObjectSchema as dictTitMainClassArgsObjectSchema } from './dictTitMainClassArgs.schema';
import { dictTitSubClassArgsObjectSchema as dictTitSubClassArgsObjectSchema } from './dictTitSubClassArgs.schema';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema'

const makeSchema = () => z.object({
  dictTitMainClass: z.union([z.boolean(), z.lazy(() => dictTitMainClassArgsObjectSchema)]).optional(),
  dictTitSubClass: z.union([z.boolean(), z.lazy(() => dictTitSubClassArgsObjectSchema)]).optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional()
}).strict();
export const tblMailingListsIncludeObjectSchema: z.ZodType<Prisma.tblMailingListsInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsInclude>;
export const tblMailingListsIncludeObjectZodSchema = makeSchema();
