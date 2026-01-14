import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersUpdateWithoutTblTitlesInputObjectSchema as tblCustomersUpdateWithoutTblTitlesInputObjectSchema } from './tblCustomersUpdateWithoutTblTitlesInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblCustomersUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblTitlesInput>;
export const tblCustomersUpdateToOneWithWhereWithoutTblTitlesInputObjectZodSchema = makeSchema();
