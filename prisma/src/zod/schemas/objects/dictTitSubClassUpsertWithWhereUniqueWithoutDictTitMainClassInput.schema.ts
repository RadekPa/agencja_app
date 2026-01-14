import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './dictTitSubClassWhereUniqueInput.schema';
import { dictTitSubClassUpdateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUpdateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUpdateWithoutDictTitMainClassInput.schema';
import { dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInput.schema';
import { dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassCreateWithoutDictTitMainClassInput.schema';
import { dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => dictTitSubClassUpdateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInputObjectSchema)]),
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const dictTitSubClassUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpsertWithWhereUniqueWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpsertWithWhereUniqueWithoutDictTitMainClassInput>;
export const dictTitSubClassUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
