import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblContactsCreateWithoutTblCustContactsInputObjectSchema as tblContactsCreateWithoutTblCustContactsInputObjectSchema } from './tblContactsCreateWithoutTblCustContactsInput.schema';
import { tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema as tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './tblContactsUncheckedCreateWithoutTblCustContactsInput.schema';
import { tblContactsCreateOrConnectWithoutTblCustContactsInputObjectSchema as tblContactsCreateOrConnectWithoutTblCustContactsInputObjectSchema } from './tblContactsCreateOrConnectWithoutTblCustContactsInput.schema';
import { tblContactsUpsertWithoutTblCustContactsInputObjectSchema as tblContactsUpsertWithoutTblCustContactsInputObjectSchema } from './tblContactsUpsertWithoutTblCustContactsInput.schema';
import { tblContactsWhereUniqueInputObjectSchema as tblContactsWhereUniqueInputObjectSchema } from './tblContactsWhereUniqueInput.schema';
import { tblContactsUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema as tblContactsUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema } from './tblContactsUpdateToOneWithWhereWithoutTblCustContactsInput.schema';
import { tblContactsUpdateWithoutTblCustContactsInputObjectSchema as tblContactsUpdateWithoutTblCustContactsInputObjectSchema } from './tblContactsUpdateWithoutTblCustContactsInput.schema';
import { tblContactsUncheckedUpdateWithoutTblCustContactsInputObjectSchema as tblContactsUncheckedUpdateWithoutTblCustContactsInputObjectSchema } from './tblContactsUncheckedUpdateWithoutTblCustContactsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblContactsCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblContactsCreateOrConnectWithoutTblCustContactsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblContactsUpsertWithoutTblCustContactsInputObjectSchema).optional(),
  connect: z.lazy(() => tblContactsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblContactsUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblContactsUpdateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblContactsUncheckedUpdateWithoutTblCustContactsInputObjectSchema)]).optional()
}).strict();
export const tblContactsUpdateOneRequiredWithoutTblCustContactsNestedInputObjectSchema: z.ZodType<Prisma.tblContactsUpdateOneRequiredWithoutTblCustContactsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsUpdateOneRequiredWithoutTblCustContactsNestedInput>;
export const tblContactsUpdateOneRequiredWithoutTblCustContactsNestedInputObjectZodSchema = makeSchema();
