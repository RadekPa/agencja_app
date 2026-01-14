import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesCreateWithoutTblTitAuxInputObjectSchema as tblTitlesCreateWithoutTblTitAuxInputObjectSchema } from './tblTitlesCreateWithoutTblTitAuxInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitAuxInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitAuxInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema)])
}).strict();
export const tblTitlesCreateOrConnectWithoutTblTitAuxInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblTitAuxInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblTitAuxInput>;
export const tblTitlesCreateOrConnectWithoutTblTitAuxInputObjectZodSchema = makeSchema();
