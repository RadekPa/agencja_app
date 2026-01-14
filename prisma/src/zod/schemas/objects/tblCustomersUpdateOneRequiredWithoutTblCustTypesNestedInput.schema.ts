import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblCustTypesInputObjectSchema as tblCustomersCreateWithoutTblCustTypesInputObjectSchema } from './tblCustomersCreateWithoutTblCustTypesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustTypesInput.schema';
import { tblCustomersCreateOrConnectWithoutTblCustTypesInputObjectSchema as tblCustomersCreateOrConnectWithoutTblCustTypesInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblCustTypesInput.schema';
import { tblCustomersUpsertWithoutTblCustTypesInputObjectSchema as tblCustomersUpsertWithoutTblCustTypesInputObjectSchema } from './tblCustomersUpsertWithoutTblCustTypesInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateToOneWithWhereWithoutTblCustTypesInputObjectSchema as tblCustomersUpdateToOneWithWhereWithoutTblCustTypesInputObjectSchema } from './tblCustomersUpdateToOneWithWhereWithoutTblCustTypesInput.schema';
import { tblCustomersUpdateWithoutTblCustTypesInputObjectSchema as tblCustomersUpdateWithoutTblCustTypesInputObjectSchema } from './tblCustomersUpdateWithoutTblCustTypesInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustTypesInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustTypesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustTypesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustTypesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblCustTypesInputObjectSchema).optional(),
  upsert: z.lazy(() => tblCustomersUpsertWithoutTblCustTypesInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateToOneWithWhereWithoutTblCustTypesInputObjectSchema), z.lazy(() => tblCustomersUpdateWithoutTblCustTypesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustTypesInputObjectSchema)]).optional()
}).strict();
export const tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInput>;
export const tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInputObjectZodSchema = makeSchema();
