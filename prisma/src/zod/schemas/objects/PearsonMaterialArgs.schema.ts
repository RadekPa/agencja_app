import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PearsonMaterialSelectObjectSchema as PearsonMaterialSelectObjectSchema } from './PearsonMaterialSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PearsonMaterialSelectObjectSchema).optional()
}).strict();
export const PearsonMaterialArgsObjectSchema = makeSchema();
export const PearsonMaterialArgsObjectZodSchema = makeSchema();
