import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateWithoutTblTitlesInputObjectSchema as tblCustomersUpdateWithoutTblTitlesInputObjectSchema } from './tblCustomersUpdateWithoutTblTitlesInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblTitlesInput.schema';
import { tblCustomersCreateWithoutTblTitlesInputObjectSchema as tblCustomersCreateWithoutTblTitlesInputObjectSchema } from './tblCustomersCreateWithoutTblTitlesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblTitlesInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblTitlesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema)]),
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const tblCustomersUpsertWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithoutTblTitlesInput>;
export const tblCustomersUpsertWithoutTblTitlesInputObjectZodSchema = makeSchema();
