import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblTitlesInputObjectSchema as tblCustomersCreateWithoutTblTitlesInputObjectSchema } from './tblCustomersCreateWithoutTblTitlesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblTitlesInput.schema';
import { tblCustomersCreateOrConnectWithoutTblTitlesInputObjectSchema as tblCustomersCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblTitlesInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblTitlesInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblCustomersCreateNestedOneWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblTitlesInput>;
export const tblCustomersCreateNestedOneWithoutTblTitlesInputObjectZodSchema = makeSchema();
