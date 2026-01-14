import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassCreateWithoutDictTitSubClassInput.schema';
import { dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutDictTitSubClassInput.schema';
import { dictTitMainClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema as dictTitMainClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassCreateOrConnectWithoutDictTitSubClassInput.schema';
import { dictTitMainClassUpsertWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUpsertWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUpsertWithoutDictTitSubClassInput.schema';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './dictTitMainClassWhereUniqueInput.schema';
import { dictTitMainClassUpdateToOneWithWhereWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUpdateToOneWithWhereWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUpdateToOneWithWhereWithoutDictTitSubClassInput.schema';
import { dictTitMainClassUpdateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUpdateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUpdateWithoutDictTitSubClassInput.schema';
import { dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictTitMainClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema).optional(),
  upsert: z.lazy(() => dictTitMainClassUpsertWithoutDictTitSubClassInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictTitMainClassWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictTitMainClassWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictTitMainClassWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictTitMainClassUpdateToOneWithWhereWithoutDictTitSubClassInputObjectSchema), z.lazy(() => dictTitMainClassUpdateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema)]).optional()
}).strict();
export const dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInput>;
export const dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInputObjectZodSchema = makeSchema();
