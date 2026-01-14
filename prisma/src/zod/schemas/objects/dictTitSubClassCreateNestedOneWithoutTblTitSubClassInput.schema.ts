import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassCreateWithoutTblTitSubClassInput.schema';
import { dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutTblTitSubClassInput.schema';
import { dictTitSubClassCreateOrConnectWithoutTblTitSubClassInputObjectSchema as dictTitSubClassCreateOrConnectWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassCreateOrConnectWithoutTblTitSubClassInput.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './dictTitSubClassWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictTitSubClassCreateOrConnectWithoutTblTitSubClassInputObjectSchema).optional(),
  connect: z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictTitSubClassCreateNestedOneWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateNestedOneWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateNestedOneWithoutTblTitSubClassInput>;
export const dictTitSubClassCreateNestedOneWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
