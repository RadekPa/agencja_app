import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema';
import { dictTitMainClassUpdateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUpdateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUpdateWithoutDictTitSubClassInput.schema';
import { dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitMainClassWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictTitMainClassUpdateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema)])
}).strict();
export const dictTitMainClassUpdateToOneWithWhereWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpdateToOneWithWhereWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpdateToOneWithWhereWithoutDictTitSubClassInput>;
export const dictTitMainClassUpdateToOneWithWhereWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
