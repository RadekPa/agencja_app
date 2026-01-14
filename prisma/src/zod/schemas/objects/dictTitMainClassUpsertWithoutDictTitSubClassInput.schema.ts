import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassUpdateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUpdateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUpdateWithoutDictTitSubClassInput.schema';
import { dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInput.schema';
import { dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassCreateWithoutDictTitSubClassInput.schema';
import { dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutDictTitSubClassInput.schema';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictTitMainClassUpdateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema)]),
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema)]),
  where: z.lazy(() => dictTitMainClassWhereInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUpsertWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpsertWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpsertWithoutDictTitSubClassInput>;
export const dictTitMainClassUpsertWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
