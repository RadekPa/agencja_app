import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassCreateWithoutDictTitSubClassInput.schema';
import { dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutDictTitSubClassInput.schema';
import { dictTitMainClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema as dictTitMainClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassCreateOrConnectWithoutDictTitSubClassInput.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './dictTitMainClassWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictTitMainClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema).optional(),
  connect: z.lazy(() => dictTitMainClassWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictTitMainClassCreateNestedOneWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitMainClassCreateNestedOneWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassCreateNestedOneWithoutDictTitSubClassInput>;
export const dictTitMainClassCreateNestedOneWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
