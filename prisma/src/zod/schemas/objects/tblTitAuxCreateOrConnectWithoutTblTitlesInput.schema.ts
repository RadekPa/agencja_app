import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuxWhereUniqueInputObjectSchema as tblTitAuxWhereUniqueInputObjectSchema } from './tblTitAuxWhereUniqueInput.schema';
import { tblTitAuxCreateWithoutTblTitlesInputObjectSchema as tblTitAuxCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuxCreateWithoutTblTitlesInput.schema';
import { tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuxUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitAuxWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitAuxCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitAuxCreateOrConnectWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuxCreateOrConnectWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxCreateOrConnectWithoutTblTitlesInput>;
export const tblTitAuxCreateOrConnectWithoutTblTitlesInputObjectZodSchema = makeSchema();
