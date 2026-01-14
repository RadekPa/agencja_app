import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './dictTitSubClassWhereUniqueInput.schema';
import { dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassCreateWithoutDictTitMainClassInput.schema';
import { dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const dictTitSubClassCreateOrConnectWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateOrConnectWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateOrConnectWithoutDictTitMainClassInput>;
export const dictTitSubClassCreateOrConnectWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
