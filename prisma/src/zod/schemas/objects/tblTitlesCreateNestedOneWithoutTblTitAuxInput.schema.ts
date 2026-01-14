import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblTitAuxInputObjectSchema as tblTitlesCreateWithoutTblTitAuxInputObjectSchema } from './tblTitlesCreateWithoutTblTitAuxInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitAuxInput.schema';
import { tblTitlesCreateOrConnectWithoutTblTitAuxInputObjectSchema as tblTitlesCreateOrConnectWithoutTblTitAuxInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblTitAuxInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitAuxInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblTitAuxInputObjectSchema).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblTitlesCreateNestedOneWithoutTblTitAuxInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblTitAuxInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblTitAuxInput>;
export const tblTitlesCreateNestedOneWithoutTblTitAuxInputObjectZodSchema = makeSchema();
