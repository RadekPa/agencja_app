import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersUpdateWithoutTblSubmissionsInputObjectSchema as tblCustomersUpdateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUpdateWithoutTblSubmissionsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const tblCustomersUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblSubmissionsInput>;
export const tblCustomersUpdateToOneWithWhereWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
