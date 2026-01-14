import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassArgsObjectSchema as dictTitMainClassArgsObjectSchema } from './dictTitMainClassArgs.schema';
import { dictTitSubClassArgsObjectSchema as dictTitSubClassArgsObjectSchema } from './dictTitSubClassArgs.schema';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema'

const makeSchema = () => z.object({
  ClassCode: z.boolean().optional(),
  SubClassCode: z.boolean().optional(),
  CustID: z.boolean().optional(),
  dictTitMainClass: z.union([z.boolean(), z.lazy(() => dictTitMainClassArgsObjectSchema)]).optional(),
  dictTitSubClass: z.union([z.boolean(), z.lazy(() => dictTitSubClassArgsObjectSchema)]).optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional()
}).strict();
export const tblMailingListsSelectObjectSchema: z.ZodType<Prisma.tblMailingListsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsSelect>;
export const tblMailingListsSelectObjectZodSchema = makeSchema();
