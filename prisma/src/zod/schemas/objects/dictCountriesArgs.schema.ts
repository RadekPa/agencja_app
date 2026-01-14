import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountriesSelectObjectSchema as dictCountriesSelectObjectSchema } from './dictCountriesSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictCountriesSelectObjectSchema).optional()
}).strict();
export const dictCountriesArgsObjectSchema = makeSchema();
export const dictCountriesArgsObjectZodSchema = makeSchema();
