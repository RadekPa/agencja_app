import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuxCreateWithoutTblTitlesInputObjectSchema as tblTitAuxCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuxCreateWithoutTblTitlesInput.schema';
import { tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuxUncheckedCreateWithoutTblTitlesInput.schema';
import { tblTitAuxCreateOrConnectWithoutTblTitlesInputObjectSchema as tblTitAuxCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblTitAuxCreateOrConnectWithoutTblTitlesInput.schema';
import { tblTitAuxWhereUniqueInputObjectSchema as tblTitAuxWhereUniqueInputObjectSchema } from './tblTitAuxWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitAuxCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitAuxCreateOrConnectWithoutTblTitlesInputObjectSchema).optional(),
  connect: z.lazy(() => tblTitAuxWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblTitAuxCreateNestedOneWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuxCreateNestedOneWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxCreateNestedOneWithoutTblTitlesInput>;
export const tblTitAuxCreateNestedOneWithoutTblTitlesInputObjectZodSchema = makeSchema();
