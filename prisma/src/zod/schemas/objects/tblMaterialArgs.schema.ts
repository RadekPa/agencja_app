import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMaterialSelectObjectSchema as tblMaterialSelectObjectSchema } from './tblMaterialSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblMaterialSelectObjectSchema).optional()
}).strict();
export const tblMaterialArgsObjectSchema = makeSchema();
export const tblMaterialArgsObjectZodSchema = makeSchema();
