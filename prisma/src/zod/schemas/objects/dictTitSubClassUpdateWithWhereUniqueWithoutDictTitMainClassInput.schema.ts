import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './dictTitSubClassWhereUniqueInput.schema';
import { dictTitSubClassUpdateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUpdateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUpdateWithoutDictTitMainClassInput.schema';
import { dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => dictTitSubClassUpdateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const dictTitSubClassUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpdateWithWhereUniqueWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateWithWhereUniqueWithoutDictTitMainClassInput>;
export const dictTitSubClassUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
