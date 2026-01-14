import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeCreateWithoutTblSubmissionsInput.schema';
import { dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUncheckedCreateWithoutTblSubmissionsInput.schema';
import { dictCopyTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema as dictCopyTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeCreateOrConnectWithoutTblSubmissionsInput.schema';
import { dictCopyTypeUpsertWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUpsertWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUpsertWithoutTblSubmissionsInput.schema';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './dictCopyTypeWhereInput.schema';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './dictCopyTypeWhereUniqueInput.schema';
import { dictCopyTypeUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUpdateToOneWithWhereWithoutTblSubmissionsInput.schema';
import { dictCopyTypeUpdateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUpdateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUpdateWithoutTblSubmissionsInput.schema';
import { dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCopyTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictCopyTypeUpsertWithoutTblSubmissionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictCopyTypeWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictCopyTypeWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictCopyTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictCopyTypeUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictCopyTypeUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)]).optional()
}).strict();
export const dictCopyTypeUpdateOneWithoutTblSubmissionsNestedInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUpdateOneWithoutTblSubmissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUpdateOneWithoutTblSubmissionsNestedInput>;
export const dictCopyTypeUpdateOneWithoutTblSubmissionsNestedInputObjectZodSchema = makeSchema();
