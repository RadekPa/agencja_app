import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './dictTitSubClassWhereUniqueInput.schema';
import { dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassCreateWithoutTblTitSubClassInput.schema';
import { dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutTblTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema)])
}).strict();
export const dictTitSubClassCreateOrConnectWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateOrConnectWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateOrConnectWithoutTblTitSubClassInput>;
export const dictTitSubClassCreateOrConnectWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
