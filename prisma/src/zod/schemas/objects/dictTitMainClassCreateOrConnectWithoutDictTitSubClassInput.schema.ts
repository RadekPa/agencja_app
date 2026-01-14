import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './dictTitMainClassWhereUniqueInput.schema';
import { dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassCreateWithoutDictTitSubClassInput.schema';
import { dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema as dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitMainClassWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema)])
}).strict();
export const dictTitMainClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitMainClassCreateOrConnectWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassCreateOrConnectWithoutDictTitSubClassInput>;
export const dictTitMainClassCreateOrConnectWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
