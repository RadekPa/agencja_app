import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassCreateWithoutDictTitMainClassInput.schema';
import { dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutDictTitMainClassInput.schema';
import { dictTitSubClassCreateOrConnectWithoutDictTitMainClassInputObjectSchema as dictTitSubClassCreateOrConnectWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassCreateOrConnectWithoutDictTitMainClassInput.schema';
import { dictTitSubClassCreateManyDictTitMainClassInputEnvelopeObjectSchema as dictTitSubClassCreateManyDictTitMainClassInputEnvelopeObjectSchema } from './dictTitSubClassCreateManyDictTitMainClassInputEnvelope.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './dictTitSubClassWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema).array(), z.lazy(() => dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => dictTitSubClassCreateOrConnectWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassCreateOrConnectWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => dictTitSubClassCreateManyDictTitMainClassInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const dictTitSubClassCreateNestedManyWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateNestedManyWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateNestedManyWithoutDictTitMainClassInput>;
export const dictTitSubClassCreateNestedManyWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
