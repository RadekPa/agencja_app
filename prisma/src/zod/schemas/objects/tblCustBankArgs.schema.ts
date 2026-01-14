import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustBankSelectObjectSchema as tblCustBankSelectObjectSchema } from './tblCustBankSelect.schema';
import { tblCustBankIncludeObjectSchema as tblCustBankIncludeObjectSchema } from './tblCustBankInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblCustBankSelectObjectSchema).optional(),
  include: z.lazy(() => tblCustBankIncludeObjectSchema).optional()
}).strict();
export const tblCustBankArgsObjectSchema = makeSchema();
export const tblCustBankArgsObjectZodSchema = makeSchema();
