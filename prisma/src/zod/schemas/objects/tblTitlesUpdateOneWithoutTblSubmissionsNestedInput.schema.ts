import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblSubmissionsInputObjectSchema as tblTitlesCreateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesCreateWithoutTblSubmissionsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblSubmissionsInput.schema';
import { tblTitlesCreateOrConnectWithoutTblSubmissionsInputObjectSchema as tblTitlesCreateOrConnectWithoutTblSubmissionsInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblSubmissionsInput.schema';
import { tblTitlesUpsertWithoutTblSubmissionsInputObjectSchema as tblTitlesUpsertWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUpsertWithoutTblSubmissionsInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema as tblTitlesUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUpdateToOneWithWhereWithoutTblSubmissionsInput.schema';
import { tblTitlesUpdateWithoutTblSubmissionsInputObjectSchema as tblTitlesUpdateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUpdateWithoutTblSubmissionsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblSubmissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblTitlesUpsertWithoutTblSubmissionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblTitlesUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblTitlesUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)]).optional()
}).strict();
export const tblTitlesUpdateOneWithoutTblSubmissionsNestedInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateOneWithoutTblSubmissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateOneWithoutTblSubmissionsNestedInput>;
export const tblTitlesUpdateOneWithoutTblSubmissionsNestedInputObjectZodSchema = makeSchema();
