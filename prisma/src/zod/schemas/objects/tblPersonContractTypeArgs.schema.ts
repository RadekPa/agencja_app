import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPersonContractTypeSelectObjectSchema as tblPersonContractTypeSelectObjectSchema } from './tblPersonContractTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblPersonContractTypeSelectObjectSchema).optional()
}).strict();
export const tblPersonContractTypeArgsObjectSchema = makeSchema();
export const tblPersonContractTypeArgsObjectZodSchema = makeSchema();
