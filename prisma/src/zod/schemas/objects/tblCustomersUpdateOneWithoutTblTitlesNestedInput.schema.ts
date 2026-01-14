import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblTitlesInputObjectSchema as tblCustomersCreateWithoutTblTitlesInputObjectSchema } from './tblCustomersCreateWithoutTblTitlesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblTitlesInput.schema';
import { tblCustomersCreateOrConnectWithoutTblTitlesInputObjectSchema as tblCustomersCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblTitlesInput.schema';
import { tblCustomersUpsertWithoutTblTitlesInputObjectSchema as tblCustomersUpsertWithoutTblTitlesInputObjectSchema } from './tblCustomersUpsertWithoutTblTitlesInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema as tblCustomersUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema } from './tblCustomersUpdateToOneWithWhereWithoutTblTitlesInput.schema';
import { tblCustomersUpdateWithoutTblTitlesInputObjectSchema as tblCustomersUpdateWithoutTblTitlesInputObjectSchema } from './tblCustomersUpdateWithoutTblTitlesInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblTitlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblTitlesInputObjectSchema).optional(),
  upsert: z.lazy(() => tblCustomersUpsertWithoutTblTitlesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema), z.lazy(() => tblCustomersUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblTitlesInputObjectSchema)]).optional()
}).strict();
export const tblCustomersUpdateOneWithoutTblTitlesNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateOneWithoutTblTitlesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateOneWithoutTblTitlesNestedInput>;
export const tblCustomersUpdateOneWithoutTblTitlesNestedInputObjectZodSchema = makeSchema();
